# frozen_string_literal: true

module Plugin
  class Schema < Metadata
    def self.create(document)
      Schema.new(document,
                 document.data[YAMLFields::CONTEXT_ID],
                 document.data[YAMLFields::SCHEMA_NAME],
                 document.data[YAMLFields::SCHEMA_DESCRIPTION],
                 document.data[YAMLFields::SCHEMA_FILE])
    end

    def initialize(document, context_id, name, description, file)
      super(document, name)
      self[MetadataFields::CONTEXT_ID] = context_id
      self[MetadataFields::DESCRIPTION] = description
      self[MetadataFields::FILE] = file
      
      validate
    end

    def validate     
      if(context_id.nil?)
        warn "Please set #{YAMLFields::CONTEXT_ID} property"
      end

      if(name.nil?)
        warn "Please set #{YAMLFields::SCHEMA_NAME} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::SCHEMA_DESCRIPTION} property"
      end

      if(file.nil?)
        warn "Please set #{YAMLFields::SCHEMA_FILE} property"
      end      
    end

    def context_id
      self[MetadataFields::CONTEXT_ID]
    end

    def description
      self[MetadataFields::DESCRIPTION]
    end

    def file
      self[MetadataFields::FILE]
    end
  end
end
