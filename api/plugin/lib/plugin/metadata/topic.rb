# frozen_string_literal: true

module Plugin
  class Topic < Metadata
    def self.create(document)
      Topic.new(document,
                document.data[YAMLFields::SCHEMA_ID],
                document.data[YAMLFields::TOPIC_NAME],
                document.data[YAMLFields::TOPIC_DESCRIPTION])
    end

    def initialize(document, schema_id, name, description)
      super(document, name)
      self[MetadataFields::SCHEMA_ID] = schema_id
      self[MetadataFields::DESCRIPTION] = description

      validate
    end

    def validate     
      if(schema_id.nil?)
        warn "Please set #{YAMLFields::SCHEMA_ID} property"
      end

      if(name.nil?)
        warn "Please set #{YAMLFields::TABLE_NAME} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::TABLE_DESCRIPTION} property"
      end
    end

    def module_id
      self[MetadataFields::MODULE_ID]
    end

    def schema_id
      self[MetadataFields::SCHEMA_ID]
    end

    def description
      self[MetadataFields::DESCRIPTION]
    end
  end
end
