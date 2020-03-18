# frozen_string_literal: true

module Plugin

  class ModulesView < Renderable
    API_ENDPOINT = 'modules/home'

    def self.create
      modules = []

      ModulesCollection.instance.each do |id, mod|
        modules.push ModuleView.create(mod)
      end

      ModulesView.new(modules)
    end

    def initialize(modules)
      super(API_ENDPOINT)
      self.modules modules
    end
  end
end
