# frozen_string_literal: true

module Plugin
  class ModuleView < Renderable
    def self.create(mod)
      context = ContextsCollection.instance.get_by_id mod.context_id
      if(context.nil?)
        warn "Context with id #{mod.context_id} not found. Did you define it?"
      else
        context = context.to_identity
      end
            
      endpoints = EndpointsCollection.instance.get_by_module mod
      caches = CachesCollection.instance.get_by_module mod
      tables = TablesCollection.instance.get_by_module mod
      
      consumesTopics = []
      mod.consumesTopics.each do |topic_id|
        topic = TopicsCollection.instance.get_by_id topic_id
        consumesTopics.push topic.to_identity
      end

      producesTopics = []
      mod.producesTopics.each do |topic_id|
        topic = TopicsCollection.instance.get_by_id topic_id
        producesTopics.push topic.to_identity
      end
      
      ModuleView.new(context,
                      mod,
                      endpoints.map { |_id, endpoint| endpoint.to_identity },
                      caches.map { |_id, cache| cache.to_identity },
                      tables.map { |_id, table| table.to_identity },
                      consumesTopics, 
                      producesTopics)
    end

    def initialize(context, mod, endpoints, caches, tables, consumesTopics, producesTopics)
      mod.copy_to_hash self
      self.delete MetadataFields::CONTEXT_ID
      
      self[MetadataFields::CONTEXT] = context
      self.endpoints endpoints
      self.caches caches
      self.tables tables
      self[MetadataFields::CONSUMES_TOPICS] = consumesTopics
      self[MetadataFields::PRODUCES_TOPICS] = producesTopics
      self[MetadataFields::NUMBER_OF_TOPICS] = consumesTopics.size + producesTopics.size
    end
  end
end
