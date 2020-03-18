# frozen_string_literal: true

module Plugin
  class TableView < Renderable
    def self.create(table)
      mod = ModulesCollection.instance.get_by_id table.module_id

      TableView.new(mod.to_identity, 
                  table)
    end

    def initialize(mod, table)
      table.copy_to_hash self
      self.delete MetadataFields::MODULE_ID
            
      self[MetadataFields::MODULE] = mod
    end
  end
end
