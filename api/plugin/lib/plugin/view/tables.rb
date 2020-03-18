# frozen_string_literal: true

module Plugin

  class TablesView < Renderable
    API_ENDPOINT = 'tables/home'

    def self.create
      tables = []

      TablesCollection.instance.each do |id, table|
        tables.push TableView.create(table)
      end

      TablesView.new(tables)
    end

    def initialize(tables)
      super(API_ENDPOINT)
      self.tables tables
    end
  end
end
