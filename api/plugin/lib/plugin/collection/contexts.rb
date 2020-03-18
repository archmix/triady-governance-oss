# frozen_string_literal: true

module Plugin
  class ContextsCollection < Collection
    include Singleton

    def add(document)
      context = Context.create(document)
      add_metadata context
    end
  end
end
