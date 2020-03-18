# frozen_string_literal: true

module Plugin
  class Generator < Jekyll::Generator
    safe true

    def generate(site)
      Jekyll::Hooks.register :pages, :post_write do |page|
        post_write(site, page)
      end
      
      collections = ["apis", "caches", "contexts", "modules", "schemas", "tables", "topics"]
      collections.each do |name|
        collection(name).clear
      end

      site.documents.each do |document|
        collection(document.collection.label).add(document)
      end

      render site, HomeDashboardView.create

      render site, ContextsView.create
      ContextsCollection.instance.values.each do |context|
        render site, ContextView.create(context)
      end

      render site, ModulesView.create
      ModulesCollection.instance.values.each do |mod|
        render site, ModuleView.create(mod)
      end

      render site, SchemasView.create
      SchemasCollection.instance.values.each do |schema|
        render site, SchemaView.create(schema)
      end

      render site, ApisView.create
      ApisCollection.instance.values.each do |api|
        render site, ApiView.create(api)
      end

      render site, CachesView.create
      CachesCollection.instance.values.each do |cache|
        render site, CacheView.create(cache)
      end

      render site, TablesView.create
      TablesCollection.instance.values.each do |table|
        render site, TableView.create(table)
      end

      render site, TopicsView.create
      TopicsCollection.instance.values.each do |topic|
        render site, TopicView.create(topic)
      end
    end

    def collection name
      collection = Plugin.const_get("#{name.capitalize}Collection").instance
    end

    def post_write(site, page)
      return unless !page.path.include?("home")

      metadata_ext = site.config["markdown_ext"]
      collections_dir = site.config["collections_dir"]

      metadata_path = "#{site.source}/#{collections_dir}/_#{page.path}.#{metadata_ext}"
      output_path = "#{site.dest}/#{page.path}"
      if (!File.exist?(metadata_path))
        puts "deleting #{output_path}"
        File.delete(output_path) if File.exist?(output_path)
      end
    end

    def render(site, view)
      content = view.render
      path = view.path
      site.pages << JSONPage.new(site, site.source, File.dirname(path), File.basename(path), content)
    end

    def log(message)
      Plugin.log(message)
    end
  end
end
