import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css']
})
export class LikeComponent {
    voteState = VoteState.None

    @Input("likes") likes: number = 0;

    @Output("upvote") upvote = new EventEmitter();
    @Output("downvote") downvote = new EventEmitter();
    @Output("reset") reset = new EventEmitter();


    upvoteClicked() {
        switch (this.voteState) {
            case VoteState.Downvoted:
                this.likes += 2;
                this.voteState = VoteState.Upvoted
                this.upvote.emit({likes: this.likes})
                break
            case VoteState.None:
                this.likes++;
                this.voteState = VoteState.Upvoted
                this.upvote.emit({likes: this.likes})
                break
            case VoteState.Upvoted:
                this.likes--;
                this.voteState = VoteState.None
                this.reset.emit({likes: this.likes})
                break
        }
    }

    downvoteClicked() {
        switch (this.voteState) {
            case VoteState.Downvoted:
                this.likes++;
                this.voteState = VoteState.None
                this.reset.emit({likes: this.likes})
                break
            case VoteState.None:
                this.likes--;
                this.voteState = VoteState.Downvoted
                this.downvote.emit({likes: this.likes})
                break
            case VoteState.Upvoted:
                this.likes -= 2;
                this.voteState = VoteState.Downvoted
                this.downvote.emit({likes: this.likes})
                break
        }
    }
}

enum VoteState {
    Upvoted,
    None,
    Downvoted
}
