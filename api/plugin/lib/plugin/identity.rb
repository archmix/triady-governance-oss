# frozen_string_literal: true

module Plugin
  class Identity < JSONable
    def self.create(metadata)
      Identity.new(metadata.id, metadata.name, metadata.path)
    end

    def initialize(id, name, path)
      self['id'] = id
      self['name'] = name
      self['path'] = path
    end
  end
end
