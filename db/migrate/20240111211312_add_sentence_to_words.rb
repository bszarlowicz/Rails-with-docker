class AddSentenceToWords < ActiveRecord::Migration[7.1]
  def change
    add_reference :words, :sentence, null: false, foreign_key: true
  end
end
