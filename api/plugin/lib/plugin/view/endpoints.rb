# frozen_string_literal: true

module Plugin

  class EndpointsView < Renderable
    API_ENDPOINT = 'endpoints/home'

    def self.create
      endpoints = []

      EndpointsCollection.instance.each do |id, endpoint|
        endpoints.push EndpointView.create(endpoint)
      end

      EndpointsView.new(endpoints)
    end

    def initialize(endpoints)
      super(API_ENDPOINT)
      self.endpoints endpoints
    end
  end
end
