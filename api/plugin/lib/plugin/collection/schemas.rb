# frozen_string_literal: true

module Plugin
  class SchemasCollection < Collection
    include Singleton

    def add(document)
      schema = Schema.create(document)
      add_metadata schema
    end

    def get_by_context(context)
      select { |_id, schema| schema.context_id == context.id }
    end
  end
end
