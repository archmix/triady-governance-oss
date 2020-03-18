# frozen_string_literal: true

module Plugin

  class SchemasView < Renderable
    API_ENDPOINT = 'schemas/home'

    def self.create
      schemas = []

      SchemasCollection.instance.each do |id, mod|
        schemas.push SchemaView.create(mod)
      end

      SchemasView.new(schemas)
    end

    def initialize(schemas)
      super(API_ENDPOINT)
      self.schemas schemas
    end
  end
end
