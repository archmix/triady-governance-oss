# frozen_string_literal: true

module Plugin
  class TablesCollection < Collection
    include Singleton

    def add(document)
      table = Table.create(document)
      add_metadata table
    end

    def get_by_modules(modules)
      select { |_id, table| modules.key?(table.module_id) }
    end

    def get_by_module(mod)
      select { |_id, table| mod.id == table.module_id }
    end
  end
end
