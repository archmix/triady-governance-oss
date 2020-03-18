# frozen_string_literal: true

module Plugin
  class Metadata < JSONable
    def initialize(document, name)
      self[MetadataFields::PATH] = document.collection.label.to_s + document.cleaned_relative_path
      self[MetadataFields::ID] = document.cleaned_relative_path[1..-1]
      self[MetadataFields::NAME] = name
    end

    def path
      self[MetadataFields::PATH]
    end

    def id
      self[MetadataFields::ID]
    end

    def name
      self[MetadataFields::NAME]
    end

    def warn(message)
      category = "Review your file #{self.path}:"
      Jekyll.logger.warn(category, message)
    end

    def to_identity
      Identity.create(self)
    end  
  end
end
