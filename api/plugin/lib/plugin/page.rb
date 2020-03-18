# frozen_string_literal: true
module Plugin
  class JSONPage < Jekyll::Page
    def initialize(site, base, dir, name, content)
      @site = site
      @base = base
      @dir  = dir
      @name = name

      self.data = {}
      self.content = content

      process(@name)
    end

    def render_with_liquid?
      false
    end
  end
end