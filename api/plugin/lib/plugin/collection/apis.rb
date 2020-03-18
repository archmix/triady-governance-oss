# frozen_string_literal: true

module Plugin
  class ApisCollection < Collection
    include Singleton

    def add(document)
      api = Api.create document
      add_metadata api
    end

    def get_by_modules(modules)
      select { |_id, api| modules.key?(api.module_id) }
    end

    def get_by_module(mod)
      select { |_id, api| mod.id == api.module_id }
    end
  end
end
