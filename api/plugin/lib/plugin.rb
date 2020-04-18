# frozen_string_literal: true

require 'jekyll'
require 'json'
require 'singleton'
require 'fileutils'

require 'plugin/jsonable'
require 'plugin/page'
require 'plugin/fields'
require 'plugin/version'
require 'plugin/identity'

require 'plugin/collection/collection'
require 'plugin/collection/endpoints'
require 'plugin/collection/caches'
require 'plugin/collection/contexts'
require 'plugin/collection/modules'
require 'plugin/collection/schemas'
require 'plugin/collection/tables'
require 'plugin/collection/topics'

require 'plugin/metadata/metadata'
require 'plugin/metadata/endpoint'
require 'plugin/metadata/cache'
require 'plugin/metadata/context'
require 'plugin/metadata/module'
require 'plugin/metadata/schema'
require 'plugin/metadata/table'
require 'plugin/metadata/topic'

require 'plugin/view/renderable'
require 'plugin/view/endpoint'
require 'plugin/view/endpoints'
require 'plugin/view/cache'
require 'plugin/view/caches'
require 'plugin/view/context'
require 'plugin/view/contexts'
require 'plugin/view/dashboard'
require 'plugin/view/module'
require 'plugin/view/modules'
require 'plugin/view/schema'
require 'plugin/view/schemas'
require 'plugin/view/table'
require 'plugin/view/tables'
require 'plugin/view/topic'
require 'plugin/view/topics'

require 'plugin/generator'

module Plugin
    def self.log(message)
        Jekyll.logger.info "Triady:", message
    end
end
