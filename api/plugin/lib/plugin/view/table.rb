# frozen_string_literal: true

module Plugin
  class TableView < Renderable
    def self.create(table)
      mod = ModulesCollection.instance.get_by_id table.module_id
      if(mod.nil?)
        warn "Module with id #{table.module_id} not found. Did you define it?"
      else
        mod = mod.to_identity
      end

      TableView.new(mod, table)
    end

    def initialize(mod, table)
      table.copy_to_hash self
      self.delete MetadataFields::MODULE_ID
            
      self[MetadataFields::MODULE] = mod
    end
  end
end
