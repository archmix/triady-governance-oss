# frozen_string_literal: true

module Plugin
  class Endpoint < Metadata
    def self.create(document)
      Endpoint.new(document,
              document.data[YAMLFields::MODULE_ID],
              document.data[YAMLFields::ENDPOINT_NAME],
              document.data[YAMLFields::ENDPOINT_URI],
              document.data[YAMLFields::ENDPOINT_METHOD],
              document.data[YAMLFields::ENDPOINT_DESCRIPTION],
              document.data[YAMLFields::ENDPOINT_GRAPHQL_FILE],
              document.data[YAMLFields::ENDPOINT_REQUEST_FILE],
              document.data[YAMLFields::ENDPOINT_RESPONSE_FILE],
              document.data[YAMLFields::ENDPOINT_ERROR_RESPONSE_FILE],
              document.data[YAMLFields::ENDPOINT_STATUS_CODES]
      )
    end

    def initialize(document, module_id, name, uri, method, description, graphQL_file, request_file, response_file, error_response_file, status_codes)
      super(document, name)
      self[MetadataFields::MODULE_ID] = module_id
      self[MetadataFields::URI] = uri
      self[MetadataFields::METHOD] = method
      self[MetadataFields::DESCRIPTION] = description
      self[MetadataFields::GRAPHQL_FILE] = graphQL_file
      self[MetadataFields::REQUEST_FILE] = request_file
      self[MetadataFields::RESPONSE_FILE] = response_file
      self[MetadataFields::ERROR_RESPONSE_FILE] = error_response_file
      self[MetadataFields::STATUS_CODES] = parse_status_code(status_codes)

      validate
    end

    def parse_status_code (status_codes)
      status_codes.delete(' ').split(',').map(&:to_i)
    end
    
    def validate     
      if(module_id.nil?)
        warn "Please set #{YAMLFields::MODULE_ID} property"
      end

      if(name.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_NAME} property"
      end

      if(uri.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_URI} property"
      end

      if(description.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_DESCRIPTION} property"
      end

      if(graphQL_file.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_GRAPHQL_FILE} property"
      end

      if(request_file.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_REQUEST_FILE} property"
      end

      if(response_file.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_RESPONSE_FILE} property"
      end

      if(error_response_file.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_ERROR_RESPONSE_FILE} property"
      end

      if(status_codes.nil?)
        warn "Please set #{YAMLFields::ENDPOINT_STATUS_CODES} property"
      end
    end

    def uri
      self[MetadataFields::NAME]
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

    def request_file
      self[MetadataFields::REQUEST_FILE]
    end

    def response_file
      self[MetadataFields::RESPONSE_FILE]
    end

    def error_response_file
      self[MetadataFields::ERROR_RESPONSE_FILE]
    end

    def status_codes
      self[MetadataFields::STATUS_CODES]
    end
  end
end
