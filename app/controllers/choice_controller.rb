class ChoiceController < ApplicationController
  def index

  end

  def new
    @user = current_user
    @poll = @user.polls.last
    @choice = Choice.new
  end

  def edit

  end

  def create
    @user = current_user
    @poll = @user.polls.last
    @choice = @poll.choices.new(choice_params)

    if @choice.save
      redirect_to root_path
    else
      redirect_to new_poll_path
    end
  end

  def update

  end

  def destroy

  end

  private

  def choice_params
    params.require(:choice).permit(:choice)
  end

end
