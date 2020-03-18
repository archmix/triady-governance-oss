# frozen_string_literal: true

module Plugin
  class ApiView < Renderable
    def self.create(api)
      mod = ModulesCollection.instance.get_by_id api.module_id

      ApiView.new(mod.to_identity, 
                  api)
    end

    def initialize(mod, api)
      api.copy_to_hash self
      self.delete MetadataFields::MODULE_ID
            
      self[MetadataFields::MODULE] = mod
    end
  end
end
