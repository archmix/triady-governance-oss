# frozen_string_literal: true

require 'jekyll'
require 'typhoeus' unless Gem.win_platform?
require File.expand_path('../lib/plugin', __dir__)

RSpec.configure do |config|
  config.run_all_when_everything_filtered = true
  config.filter_run :focus
  config.order = 'random'

  SOURCE_DIR = File.expand_path('fixtures', __dir__)
  DEST_DIR   = File.expand_path('dest',     __dir__)
  ASSERT_DIR = File.expand_path('assertions', __dir__)

  def source_dir(*files)
    File.join(SOURCE_DIR, *files)
  end

  def dest_dir(*files)
    File.join(DEST_DIR, *files)
  end

  def assert_dir(*files)
    File.join(ASSERT_DIR, *files)
  end

  def make_context(registers = {})
    Liquid::Context.new({}, {}, { site: site }.merge(registers))
  end

  def assert_asset(asset_location)
    expect(File.read(dest_dir(asset_location))).to eq(File.read(assert_dir(asset_location)))
  end
end
