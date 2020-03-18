# frozen_string_literal: true

module Plugin
  class Api < Metadata
    def self.create(document)
      Api.new(document,
              document.data[YAMLFields::MODULE_ID],
              document.data[YAMLFields::API_NAME],
              document.data[YAMLFields::API_DESCRIPTION],
              document.data[YAMLFields::API_GRAPHQL_FILE],
              document.data[YAMLFields::API_SWAGGER_FILE])
    end

    def initialize(document, module_id, name, description, graphQL_file, swagger_file)
      super(document, name)
      self[MetadataFields::MODULE_ID] = module_id
      self[MetadataFields::DESCRIPTION] = description
      self[MetadataFields::GRAPHQL_FILE] = graphQL_file
      self[MetadataFields::SWAGGER_FILE] = swagger_file

      validate
    end

    def validate     
      if(module_id.nil?)
        warn "Please set #{YAMLFields::MODULE_ID} property"
      end

      if(name.nil?)
        warn "Please set #{YAMLFields::API_NAME} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::API_DESCRIPTION} property"
      end

      if(graphQL_file.nil?)
        warn "Please set #{YAMLFields::API_GRAPHQL_FILE} property"
      end

      if(swagger_file.nil?)
        warn "Please set #{YAMLFields::API_SWAGGER_FILE} property"
      end
    end

    def module_id
      self[MetadataFields::MODULE_ID]
    end

    def description
      self[MetadataFields::DESCRIPTION]
    end

    def graphQL_file
      self[MetadataFields::GRAPHQL_FILE]
    end

    def swagger_file
      self[MetadataFields::SWAGGER_FILE]
    end
  end
end
