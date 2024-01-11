class CreateSentences < ActiveRecord::Migration[7.1]
  def change
    create_table :sentences do |t|
      t.string :content

      t.timestamps
    end
  end
end
