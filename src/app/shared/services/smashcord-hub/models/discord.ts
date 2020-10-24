export class Discord {
  constructor(
    public readonly name: string,
    public readonly icon: string,
    public readonly admins: string[],
    public readonly invitationId: string,
  ) {}
}
