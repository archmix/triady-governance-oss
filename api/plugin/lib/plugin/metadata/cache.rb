# frozen_string_literal: true

module Plugin
  class Cache < Metadata
    def self.create(document)
      Cache.new(document,
                document.data[YAMLFields::MODULE_ID],
                document.data[YAMLFields::CACHE_NAME],
                document.data[YAMLFields::CACHE_DESCRIPTION],
                document.data[YAMLFields::CACHE_SCHEMA_FILE],
                document.data[YAMLFields::SCHEMA_ID])
    end

    def initialize(document, module_id, name, description, schema_file, schema_id)
      super(document, name)
      self[MetadataFields::MODULE_ID] = module_id
      self[MetadataFields::DESCRIPTION] = description
      self[MetadataFields::SCHEMA_FILE] = schema_file
      self[MetadataFields::SCHEMA_ID] = schema_id

      validate
    end

    def validate     
      if(module_id.nil?)
        warn "Please set #{YAMLFields::MODULE_ID} property"
      end

      if(name.nil?)
        warn "Please set #{YAMLFields::CACHE_NAME} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::CACHE_DESCRIPTION} property"
      end

      if(schema_file.nil? && schema_id.nil?)
        warn "Please set #{YAMLFields::CACHE_SCHEMA_FILE} or #{YAMLFields::SCHEMA_ID} property"
      end
      
      if(!schema_file.nil? && !schema_id.nil?)
        warn "Please set only one between #{YAMLFields::CACHE_SCHEMA_FILE} and #{YAMLFields::SCHEMA_ID} properties"
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

    def schema_id
      self[MetadataFields::SCHEMA_ID]
    end   
  end
end
