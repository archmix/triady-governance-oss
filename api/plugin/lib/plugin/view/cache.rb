# frozen_string_literal: true

module Plugin
  class CacheView < Renderable
    def self.create(cache)
      mod = ModulesCollection.instance.get_by_id cache.module_id
      schema = nil

      if(!cache.schema_id.nil?)
        schema = SchemasCollection.instance.get_by_id cache.schema_id
      end

      if(!schema.nil?)
        schema = schema.to_identity
      end

      CacheView.new(mod.to_identity, schema,
                  cache)
    end

    def initialize(mod, schema, cache)
      cache.copy_to_hash self
      self.delete MetadataFields::MODULE_ID
      self.delete MetadataFields::SCHEMA_ID
            
      self[MetadataFields::MODULE] = mod
      self[MetadataFields::SCHEMA] = schema
    end
  end
end
