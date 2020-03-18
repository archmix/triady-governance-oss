# frozen_string_literal: true

module Plugin

  class ContextsView < Renderable
    API_ENDPOINT = 'contexts/home'

    def self.create
      contexts = []

      ContextsCollection.instance.each do |id, context|
        contexts.push ContextView.create(context)
      end

      ContextsView.new(contexts)
    end

    def initialize(contexts)
      super(API_ENDPOINT)
      self.contexts contexts
    end
  end
end
