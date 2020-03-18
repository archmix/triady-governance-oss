# frozen_string_literal: true

module Plugin

  class CachesView < Renderable
    API_ENDPOINT = 'caches/home'

    def self.create
      caches = []

      CachesCollection.instance.each do |id, cache|
        caches.push CacheView.create(cache)
      end

      CachesView.new(caches)
    end

    def initialize(caches)
      super(API_ENDPOINT)
      self.caches caches
    end
  end
end
