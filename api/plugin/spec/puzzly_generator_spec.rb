# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Plugin do
  let(:overrides) { {} }
  let(:config) do
    Jekyll.configuration(Jekyll::Utils.deep_merge_hashes({
                                                           'full_rebuild' => true,
                                                           'source' => source_dir,
                                                           'destination' => dest_dir
                                                         }, overrides))
  end
  let(:site)     { Jekyll::Site.new(config) }
  let(:contents) { File.read(dest_dir) }
  let(:context)  { make_context(site: site) }
  before(:each) do
    site.process
  end

  it 'creates api home json file' do
    assert_asset('apis/home')
  end

  it 'creates api json file' do
    assert_asset('apis/api')
  end

  it 'creates cache json file' do
    assert_asset('caches/cache')
  end

  it 'creates caches home json file' do
    assert_asset('caches/home')
  end

  it 'creates context json file' do
    assert_asset('contexts/context')
  end

  it 'creates context home json file' do
    assert_asset('contexts/home')
  end

  it 'creates dashboard json file' do
    assert_asset('dashboards/home')
  end

  it 'creates module json file' do
    assert_asset('modules/module')
  end

  it 'creates module home json file' do
    assert_asset('modules/home')
  end

  it 'creates schema json file' do
    assert_asset('schemas/schema')
  end

  it 'creates schema home json file' do
    assert_asset('schemas/home')
  end

  it 'creates table json file' do
    assert_asset('tables/table')
  end

  it 'creates table home json file' do
    assert_asset('tables/home')
  end

  it 'creates topic json file' do
    assert_asset('topics/consumed')
    assert_asset('topics/produced')
  end

  it 'creates topic home json file' do
    assert_asset('topics/home')
  end

end
