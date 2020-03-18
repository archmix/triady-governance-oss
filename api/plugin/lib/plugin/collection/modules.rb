# frozen_string_literal: true

module Plugin
  class ModulesCollection < Collection
    include Singleton

    def add(document)
      mod = Module.create(document)
      add_metadata mod
    end

    def get_by_context(context)
      select { |_id, mod| mod.context_id == context.id }
    end

    def get_consumers(topic)
      select { |_id, mod| mod.consumesTopics.include? topic.id }
    end

    def get_producers(topic)
      select { |_id, mod| mod.producesTopics.include? topic.id }
    end
  end
end
