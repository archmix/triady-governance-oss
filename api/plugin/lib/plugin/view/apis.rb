# frozen_string_literal: true

module Plugin

  class ApisView < Renderable
    API_ENDPOINT = 'apis/home'

    def self.create
      apis = []

      ApisCollection.instance.each do |id, api|
        apis.push ApiView.create(api)
      end

      ApisView.new(apis)
    end

    def initialize(apis)
      super(API_ENDPOINT)
      self.apis apis
    end
  end
end
