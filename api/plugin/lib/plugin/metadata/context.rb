# frozen_string_literal: true

module Plugin
  class Context < Metadata
    def self.create(document)
      Context.new(document,
                  document.data[YAMLFields::CONTEXT_NAME],
                  document.data[YAMLFields::CONTEXT_DESCRIPTION])
    end

    def initialize(document, name, description)
      super(document, name)
      self[MetadataFields::DESCRIPTION] = description
      
      validate
    end

    def validate     
      if(name.nil?)
        warn "Please set #{YAMLFields::CONTEXT_NAME} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::CONTEXT_DESCRIPTION} property"
      end
    end

    def description
      self[MetadataFields::DESCRIPTION]
    end    
  end
end
