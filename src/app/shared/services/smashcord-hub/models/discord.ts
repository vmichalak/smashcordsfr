export class Discord {
  constructor(
    public readonly name: string,
    public readonly admins: string[],
    public readonly invitationId: string,
  ) {}
}
