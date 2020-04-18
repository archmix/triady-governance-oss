# frozen_string_literal: true

module Plugin
  class EndpointView < Renderable
    def self.create(endpoint)
      mod = ModulesCollection.instance.get_by_id endpoint.module_id

      EndpointView.new(mod.to_identity, endpoint)
    end

    def initialize(mod, endpoint)
      endpoint.copy_to_hash self
      self.delete MetadataFields::MODULE_ID
            
      self[MetadataFields::MODULE] = mod
    end
  end
end
