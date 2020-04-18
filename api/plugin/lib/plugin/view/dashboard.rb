# frozen_string_literal: true

module Plugin
  class HomeDashboardView < Renderable
    API_ENDPOINT = 'dashboards/home'

    def self.create
      HomeDashboardView.new(EndpointsCollection.instance.identities,
                        CachesCollection.instance.identities,
                        ContextsCollection.instance.identities,
                        ModulesCollection.instance.identities,
                        SchemasCollection.instance.identities,
                        TablesCollection.instance.identities,
                        TopicsCollection.instance.identities)
    end

    private

    def initialize(endpoints, caches, contexts, modules, schemas, tables, topics)
      super(API_ENDPOINT)
      self.endpoints endpoints
      self.caches caches
      self.contexts contexts
      self.modules modules
      self.schemas schemas
      self.tables tables
      self.topics topics
    end
  end
end
