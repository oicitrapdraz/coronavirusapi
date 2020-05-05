# frozen_string_literal: true

class State < ApplicationRecord
  scope :is_official, -> { where(official_flag: true) }
  scope :is_official_and_name_is, ->(name) { is_official.where(name: name) }
end
