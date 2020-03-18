# frozen_string_literal: true

module Plugin
  class CachesCollection < Collection
    include Singleton

    def add(document)
      cache = Cache.create(document)
      add_metadata cache
    end

    def get_by_modules(modules)
      select { |_id, cache| modules.key?(cache.module_id) }
    end

    def get_by_module(mod)
      select { |_id, cache| mod.id == cache.module_id }
    end

    def get_by_schema(schema)
      select { |_id, cache| schema.id == cache.schema_id }
    end    
  end
end
