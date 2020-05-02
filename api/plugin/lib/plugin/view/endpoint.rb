# frozen_string_literal: true

module Plugin
  class EndpointView < Renderable
    def self.create(endpoint)
      mod = ModulesCollection.instance.get_by_id endpoint.module_id

      if(mod.nil?)
        warn "Module with id #{endpoint.module_id} not found. Did you define it?"
      else
        mod = mod.to_identity
      end

      EndpointView.new(mod, endpoint)
    end

    def initialize(mod, endpoint)
      endpoint.copy_to_hash self
      self.delete MetadataFields::MODULE_ID
            
      self[MetadataFields::MODULE] = mod
    end
  end
end
