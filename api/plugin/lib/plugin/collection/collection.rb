# frozen_string_literal: true

module Plugin
  class Collection < JSONable
    def identities
      identities = []

      each do |_id, metadata|
        identity = metadata.to_identity
        identities.push identity
      end

      identities
    end

    def add_metadata(metadata)
      self[metadata.id] = metadata
    end

    def get_by_id(id)
      self[id]
    end
  end
end
