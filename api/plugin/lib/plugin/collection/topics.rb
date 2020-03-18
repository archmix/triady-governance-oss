# frozen_string_literal: true

module Plugin
  class TopicsCollection < Collection
    include Singleton

    def add(document)
      topic = Topic.create(document)
      add_metadata topic
    end

    def get_by_modules modules
      topics = []
      modules.each do |_id, mod|    
        mod_topics = get_by_module(mod)
        topics = topics + mod_topics
      end

      topics
    end

    def get_by_module mod
      topics = []
      mod.consumesTopics.each do |topic_id|
        topic = TopicsCollection.instance.get_by_id topic_id
        topics.push topic
      end

      mod.producesTopics.each do |topic_id|
        topic = TopicsCollection.instance.get_by_id topic_id
        topics.push topic
      end

      topics
    end

    def get_by_schema schema
      select { |_id, topic| schema.id == topic.schema_id }
    end
  end
end
