# frozen_string_literal: true

module Plugin
  class JSONable < Hash
    def copy_to_hash(hash)
      each do |key, value|
        hash.store(key, value)
      end
    end

    def to_s
      to_json
    end
  end
end
