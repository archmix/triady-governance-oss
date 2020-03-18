# frozen_string_literal: true

require_relative 'lib/plugin/version'

Gem::Specification.new do |spec|
  spec.name          = 'plugin'
  spec.version       = Plugin::VERSION
  spec.authors       = ['Mr. Braz']
  spec.email         = ['mrbraz@archmix.org']

  spec.summary       = 'Triady Governance Plug-in'
  spec.description   = 'Jekyll Plug-in that generates json files based on collections'
  spec.homepage      = 'https://archmix.org'
  spec.license       = 'Apache 2.0'
  spec.required_ruby_version = Gem::Requirement.new('>= 2.3.0')

  spec.metadata['homepage_uri'] = spec.homepage
  spec.metadata['source_code_uri'] = 'https://github.com/triady-oss/governance'

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`
      .split("\x0")
      .reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_dependency 'jekyll', '>= 3.7', '< 5.0'

  spec.add_development_dependency 'bundler'
  spec.add_development_dependency 'rake', '~> 12.0'
  spec.add_development_dependency 'rspec', '~> 3.0'
  spec.add_development_dependency 'rubocop-jekyll', '~> 0.5'
  spec.add_development_dependency 'typhoeus', '>= 0.7', '< 2.0'
end
