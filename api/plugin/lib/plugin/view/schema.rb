# frozen_string_literal: true

module Plugin
  class SchemaView < Renderable
    def self.create(schema)
      context = ContextsCollection.instance.get_by_id schema.context_id
      
      caches = CachesCollection.instance.get_by_schema schema
      topics = TopicsCollection.instance.get_by_schema schema

      SchemaView.new( context.to_identity,
                      schema, 
                      topics.map { |_id, topic| topic.to_identity },
                      caches.map {|_id, cache| cache.to_identity})
    end

    def initialize(context, schema, topics, caches)
      schema.copy_to_hash self
      self.delete MetadataFields::CONTEXT_ID
      
      self[MetadataFields::CONTEXT] = context
      self.topics topics
      self.caches caches
    end
  end
end
