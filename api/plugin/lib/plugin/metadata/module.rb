# frozen_string_literal: true

module Plugin
  class Module < Metadata
    def self.create(document)
      Module.new(document,
                 document.data[YAMLFields::CONTEXT_ID],
                 document.data[YAMLFields::MODULE_NAME],
                 document.data[YAMLFields::MODULE_DESCRIPTION], 
                 document.data[YAMLFields::MODULE_CONSUMES_TOPICS],
                 document.data[YAMLFields::MODULE_PRODUCES_TOPICS])
    end

    def initialize(document, context_id, name, description, consumesTopics, producesTopics)
      super(document, name)
      self[MetadataFields::CONTEXT_ID] = context_id
      self[MetadataFields::DESCRIPTION] = description
      if(consumesTopics.nil?)
        consumesTopics = ""
      end
      self[MetadataFields::CONSUMES_TOPICS] = consumesTopics.split(",")
      
      if(producesTopics.nil?)
        producesTopics = ""
      end
      self[MetadataFields::PRODUCES_TOPICS] = producesTopics.split(",")

      validate
    end

    def validate     
      if(context_id.nil?)
        warn "Please set #{YAMLFields::CONTEXT_ID} property"
      end

      if(name.nil?)
        warn "Please set #{YAMLFields::MODULE_NAME} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::MODULE_DESCRIPTION} property"
      end

      if(consumesTopics.nil?)
        warn "Please set #{YAMLFields::MODULE_CONSUMES_TOPICS} property"
      end

      if(producesTopics.nil?)
        warn "Please set #{YAMLFields::MODULE_PRODUCES_TOPICS} property"
      end
    end

    def context_id
      self[MetadataFields::CONTEXT_ID]
    end

    def description
      self[MetadataFields::DESCRIPTION]
    end

    def consumesTopics
      self[MetadataFields::CONSUMES_TOPICS]
    end

    def producesTopics
      self[MetadataFields::PRODUCES_TOPICS]
    end
  end
end
