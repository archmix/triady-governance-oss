# frozen_string_literal: true

module Plugin
  class Renderable < JSONable
    def initialize(path)
      self['path'] = path
    end

    def render
      to_json
    end

    def path
      self[MetadataFields::PATH]
    end

    def contexts contexts
      self[MetadataFields::CONTEXTS] = contexts
      self[MetadataFields::NUMBER_OF_CONTEXTS] = contexts.size
    end

    def modules modules
      self[MetadataFields::MODULES] = modules
      self[MetadataFields::NUMBER_OF_MODULES] = modules.size
    end

    def schemas schemas
      self[MetadataFields::SCHEMAS] = schemas
      self[MetadataFields::NUMBER_OF_SCHEMAS] = schemas.size
    end

    def endpoints endpoints
      self[MetadataFields::ENDPOINTS] = endpoints
      self[MetadataFields::NUMBER_OF_ENDPOINTS] = endpoints.size
    end

    def caches caches
      self[MetadataFields::CACHES] = caches
      self[MetadataFields::NUMBER_OF_CACHES] = caches.size
    end

    def tables tables
      self[MetadataFields::TABLES] = tables
      self[MetadataFields::NUMBER_OF_TABLES] = tables.size
    end

    def topics topics
      self[MetadataFields::TOPICS] = topics
      self[MetadataFields::NUMBER_OF_TOPICS] = topics.size
    end
  end
end
