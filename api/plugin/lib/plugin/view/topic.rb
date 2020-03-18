# frozen_string_literal: true

module Plugin
  class TopicView < Renderable
    def self.create(topic)
      consumers = ModulesCollection.instance.get_consumers topic
      producers = ModulesCollection.instance.get_producers topic
      
      schema = SchemasCollection.instance.get_by_id topic.schema_id

      TopicView.new(topic,
                  producers.map{|_id, producer| producer.to_identity},
                  consumers.map{|_id, consumer| consumer.to_identity},
                  schema.to_identity)
    end

    def initialize(topic, producers, consumers, schema)
      topic.copy_to_hash self
      self.delete MetadataFields::MODULE_ID
      self.delete MetadataFields::SCHEMA_ID
            
      self[MetadataFields::PRODUCED_BY] = producers
      self[MetadataFields::CONSUMED_BY] = consumers
      self[MetadataFields::SCHEMA] = schema
    end
  end
end
