# frozen_string_literal: true

module Plugin
  class Table < Metadata
    def self.create(document)
      Table.new(document,
                document.data[YAMLFields::MODULE_ID],
                document.data[YAMLFields::TABLE_NAME],
                document.data[YAMLFields::TABLE_DESCRIPTION],
                document.data[YAMLFields::TABLE_SCHEMA_FILE])
    end

    def initialize(document, module_id, name, description, schema_file)
      super(document, name)
      self[MetadataFields::MODULE_ID] = module_id
      self[MetadataFields::DESCRIPTION] = description
      self[MetadataFields::SCHEMA_FILE] = schema_file

      validate
    end

    def validate     
      if(module_id.nil?)
        warn "Please set #{YAMLFields::MODULE_ID} property"
      end

      if(name.nil?)
        warn "Please set #{YAMLFields::TABLE_NAME} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::TABLE_DESCRIPTION} property"
      end

      if(schema_file.nil?)
        warn "Please set #{YAMLFields::TABLE_SCHEMA_FILE} property"
      end
    end

    def module_id
      self[MetadataFields::MODULE_ID]
    end

    def description
      self[MetadataFields::DESCRIPTION]
    end

    def schema_file
      self[MetadataFields::SCHEMA_FILE]
    end
  end
end
