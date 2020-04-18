# frozen_string_literal: true

module Plugin
  class EndpointsCollection < Collection
    include Singleton

    def add(document)
      endpoint = Endpoint.create document
      add_metadata endpoint
    end

    def get_by_modules(modules)
      select { |_id, endpoint| modules.key?(endpoint.module_id) }
    end

    def get_by_module(mod)
      select { |_id, endpoint| mod.id == endpoint.module_id }
    end
  end
end
