# frozen_string_literal: true

module Plugin

  class TopicsView < Renderable
    API_ENDPOINT = 'topics/home'

    def self.create
      topics = []

      TopicsCollection.instance.each do |id, topic|
        topics.push TopicView.create(topic)
      end

      TopicsView.new(topics)
    end

    def initialize(topics)
      super(API_ENDPOINT)
      self.topics topics
    end
  end
end
