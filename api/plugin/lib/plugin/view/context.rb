# frozen_string_literal: true

module Plugin
  class ContextView < Renderable
    def self.create(context)
      modules = ModulesCollection.instance.get_by_context context
      schemas = SchemasCollection.instance.get_by_context context

      endpoints = EndpointsCollection.instance.get_by_modules modules
      caches = CachesCollection.instance.get_by_modules modules
      tables = TablesCollection.instance.get_by_modules modules
      
      topics = TopicsCollection.instance.get_by_modules modules

      ContextView.new(context,
                      modules.map { |_id, mod| mod.to_identity },
                      schemas.map { |_id, schema| schema.to_identity },
                      endpoints.map { |_id, api| api.to_identity },
                      caches.map { |_id, cache| cache.to_identity },
                      tables.map { |_id, table| table.to_identity },
                      topics.map { |topic| topic.to_identity })
    end

    def initialize(context, modules, schemas, endpoints, caches, tables, topics)
      context.copy_to_hash self
      self.modules modules
      self.schemas schemas
      self.endpoints endpoints
      self.caches caches
      self.tables tables
      self.topics topics
    end
  end
end
