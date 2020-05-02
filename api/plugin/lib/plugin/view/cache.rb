# frozen_string_literal: true

module Plugin
  class CacheView < Renderable
    def self.create(cache)
      mod = ModulesCollection.instance.get_by_id cache.module_id

      if(mod.nil?)
        warn "Module with id #{cache.module_id} not found. Did you define it?"
      else
        mod = mod.to_identity
      end

      schema = nil

      if(!cache.schema_id.nil?)
        schema = SchemasCollection.instance.get_by_id cache.schema_id
      end

      if(!schema.nil?)
        schema = schema.to_identity
      end

      CacheView.new(mod, schema, cache)
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
